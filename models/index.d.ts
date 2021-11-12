import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BlogpostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Blogpost {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly media?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Blogpost, BlogpostMetaData>);
  static copyOf(source: Blogpost, mutator: (draft: MutableModel<Blogpost, BlogpostMetaData>) => MutableModel<Blogpost, BlogpostMetaData> | void): Blogpost;
}