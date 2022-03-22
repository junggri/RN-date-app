export const CREATE_PLACE = `
  mutation gql($data: PlaceInput!){
    insertPlace(data: $data)
  }
`
