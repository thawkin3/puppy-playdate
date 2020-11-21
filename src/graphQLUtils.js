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
      matchedCount
      profilePic
      bio
      interests
    }
  }
`

export function fetchAllPuppies() {
  return fetchGraphQL(fetchAllPuppiesOperationsDoc, 'FetchAllPuppies', {})
}

// Update the puppy matched count
const updatePuppyMatchedCountOperationsDoc = (
  puppyId,
  newMatchedCountValue
) => `
  mutation UpdatePuppyMatchedCount {
    updatePuppy(input: { filter: { id: ["${puppyId}"] }, set: { matchedCount: ${newMatchedCountValue} } }) {
      puppy {
        id
        name
        age
        matchedCount
        profilePic
        bio
        interests
      }
    }
  }
`

export function updatePuppyMatchedCount(puppyId, newMatchedCountValue) {
  return fetchGraphQL(
    updatePuppyMatchedCountOperationsDoc(puppyId, newMatchedCountValue),
    'UpdatePuppyMatchedCount',
    {}
  )
}
