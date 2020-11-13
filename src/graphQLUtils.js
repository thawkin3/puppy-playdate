// Main generic GraphQL request
async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    'https://puppy-playdate.us-west-2.aws.cloud.dgraph.io/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operationsDoc,
        operationName,
        variables,
      }),
    }
  )

  return await result.json()
}

// Fetch all puppies
const fetchAllPuppiesOperationsDoc = `
  query FetchAllPuppies {
    queryPuppy {
      id
      name
      age
      matched
      profilePic
      bio
      interests
    }
  }
`

export function fetchAllPuppies() {
  return fetchGraphQL(fetchAllPuppiesOperationsDoc, 'FetchAllPuppies', {})
}

// Update the puppy matched status
const updatePuppyMatchedStatusOperationsDoc = (puppyId, newIsMatchedValue) => `
  mutation UpdatePuppyMatchedStatus {
    updatePuppy(input: { filter: { id: ["${puppyId}"] }, set: { matched: ${newIsMatchedValue} } }) {
      puppy {
        id
        name
        age
        matched
        profilePic
        bio
        interests
      }
    }
  }
`

export function updatePuppyMatchedStatus(puppyId, newIsMatchedValue) {
  return fetchGraphQL(
    updatePuppyMatchedStatusOperationsDoc(puppyId, newIsMatchedValue),
    'UpdatePuppyMatchedStatus',
    {}
  )
}
