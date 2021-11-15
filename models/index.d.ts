import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BlogcategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogcategoryBlogpostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogpostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectcategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectcategoryProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Blogcategory {
  readonly id: string;
  readonly category?: string;
  readonly BlogcategoryBlogposts?: (BlogcategoryBlogpost | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Blogcategory, BlogcategoryMetaData>);
  static copyOf(source: Blogcategory, mutator: (draft: MutableModel<Blogcategory, BlogcategoryMetaData>) => MutableModel<Blogcategory, BlogcategoryMetaData> | void): Blogcategory;
}

export declare class BlogcategoryBlogpost {
  readonly id: string;
  readonly blogcategory: Blogcategory;
  readonly blogpost: Blogpost;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BlogcategoryBlogpost, BlogcategoryBlogpostMetaData>);
  static copyOf(source: BlogcategoryBlogpost, mutator: (draft: MutableModel<BlogcategoryBlogpost, BlogcategoryBlogpostMetaData>) => MutableModel<BlogcategoryBlogpost, BlogcategoryBlogpostMetaData> | void): BlogcategoryBlogpost;
}

export declare class Blogpost {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly media?: string;
  readonly blogcategorys?: (BlogcategoryBlogpost | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Blogpost, BlogpostMetaData>);
  static copyOf(source: Blogpost, mutator: (draft: MutableModel<Blogpost, BlogpostMetaData>) => MutableModel<Blogpost, BlogpostMetaData> | void): Blogpost;
}

export declare class Projectcategory {
  readonly id: string;
  readonly category?: string;
  readonly ProjectcategoryProjects?: (ProjectcategoryProject | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Projectcategory, ProjectcategoryMetaData>);
  static copyOf(source: Projectcategory, mutator: (draft: MutableModel<Projectcategory, ProjectcategoryMetaData>) => MutableModel<Projectcategory, ProjectcategoryMetaData> | void): Projectcategory;
}

export declare class ProjectcategoryProject {
  readonly id: string;
  readonly projectcategory: Projectcategory;
  readonly project: Project;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProjectcategoryProject, ProjectcategoryProjectMetaData>);
  static copyOf(source: ProjectcategoryProject, mutator: (draft: MutableModel<ProjectcategoryProject, ProjectcategoryProjectMetaData>) => MutableModel<ProjectcategoryProject, ProjectcategoryProjectMetaData> | void): ProjectcategoryProject;
}

export declare class Project {
  readonly id: string;
  readonly title?: string;
  readonly info?: string;
  readonly github?: string;
  readonly projectcategorys?: (ProjectcategoryProject | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}