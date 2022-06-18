/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
      id
      client
      clientID
      details
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Client {
        id
        name
        pronouns
        needs
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Volunteer {
        id
        name
        email
        phone
        contactMethods
        provisions
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
      id
      client
      clientID
      details
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Client {
        id
        name
        pronouns
        needs
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Volunteer {
        id
        name
        email
        phone
        contactMethods
        provisions
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
      id
      client
      clientID
      details
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Client {
        id
        name
        pronouns
        needs
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Volunteer {
        id
        name
        email
        phone
        contactMethods
        provisions
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      name
      pronouns
      needs
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Requests {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      name
      pronouns
      needs
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Requests {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      name
      pronouns
      needs
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Requests {
        nextToken
        startedAt
      }
    }
  }
`;
export const createVolunteer = /* GraphQL */ `
  mutation CreateVolunteer(
    $input: CreateVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    createVolunteer(input: $input, condition: $condition) {
      id
      name
      email
      phone
      contactMethods
      provisions
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateVolunteer = /* GraphQL */ `
  mutation UpdateVolunteer(
    $input: UpdateVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    updateVolunteer(input: $input, condition: $condition) {
      id
      name
      email
      phone
      contactMethods
      provisions
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteVolunteer = /* GraphQL */ `
  mutation DeleteVolunteer(
    $input: DeleteVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    deleteVolunteer(input: $input, condition: $condition) {
      id
      name
      email
      phone
      contactMethods
      provisions
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
