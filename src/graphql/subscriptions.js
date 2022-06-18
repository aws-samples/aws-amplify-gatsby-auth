/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest {
    onCreateRequest {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest {
    onUpdateRequest {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest {
    onDeleteRequest {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateVolunteer = /* GraphQL */ `
  subscription OnCreateVolunteer {
    onCreateVolunteer {
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
export const onUpdateVolunteer = /* GraphQL */ `
  subscription OnUpdateVolunteer {
    onUpdateVolunteer {
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
export const onDeleteVolunteer = /* GraphQL */ `
  subscription OnDeleteVolunteer {
    onDeleteVolunteer {
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
