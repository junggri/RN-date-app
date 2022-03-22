export const GET_PLACE = `
  query gql{
    getPlace{
      buildingName
      roadAddress
      latitude
      longitude
      user{
        name
        userImage
        birthDay
        phoneNumber
      }
    }
  }
`

