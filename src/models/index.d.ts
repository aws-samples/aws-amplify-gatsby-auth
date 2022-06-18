import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Request {
  readonly id: string;
  readonly client?: string | null;
  readonly Client?: Client | null;
  readonly clientID: string;
  readonly details?: string | null;
  readonly Volunteer?: Volunteer | null;
  readonly status?: string | null;
  constructor(init: ModelInit<Request>);
  static copyOf(source: Request, mutator: (draft: MutableModel<Request>) => MutableModel<Request> | void): Request;
}

export declare class Client {
  readonly id: string;
  readonly name?: string | null;
  readonly pronouns?: string | null;
  readonly needs?: string | null;
  readonly Requests?: (Request | null)[] | null;
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

export declare class Volunteer {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly contactMethods?: string | null;
  readonly provisions?: string | null;
  constructor(init: ModelInit<Volunteer>);
  static copyOf(source: Volunteer, mutator: (draft: MutableModel<Volunteer>) => MutableModel<Volunteer> | void): Volunteer;
}