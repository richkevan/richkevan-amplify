import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CertIssuerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CertificatesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CurrentWorkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeaturedProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectcategoryProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectcategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeaturedBlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogpostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogcategoryBlogpostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogcategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SiteTitleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkExperienceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CertIssuer {
  readonly id: string;
  readonly name?: string;
  readonly website?: string;
  readonly CertificatesIssuer?: (Certificates | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CertIssuer, CertIssuerMetaData>);
  static copyOf(source: CertIssuer, mutator: (draft: MutableModel<CertIssuer, CertIssuerMetaData>) => MutableModel<CertIssuer, CertIssuerMetaData> | void): CertIssuer;
}

export declare class Certificates {
  readonly id: string;
  readonly cert_name?: string;
  readonly cert_date?: string;
  readonly cert_link?: string;
  readonly certissuerID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Certificates, CertificatesMetaData>);
  static copyOf(source: Certificates, mutator: (draft: MutableModel<Certificates, CertificatesMetaData>) => MutableModel<Certificates, CertificatesMetaData> | void): Certificates;
}

export declare class CurrentWork {
  readonly id: string;
  readonly title?: string;
  readonly content?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CurrentWork, CurrentWorkMetaData>);
  static copyOf(source: CurrentWork, mutator: (draft: MutableModel<CurrentWork, CurrentWorkMetaData>) => MutableModel<CurrentWork, CurrentWorkMetaData> | void): CurrentWork;
}

export declare class FeaturedProject {
  readonly id: string;
  readonly title?: string;
  readonly FeatureProject?: Project;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FeaturedProject, FeaturedProjectMetaData>);
  static copyOf(source: FeaturedProject, mutator: (draft: MutableModel<FeaturedProject, FeaturedProjectMetaData>) => MutableModel<FeaturedProject, FeaturedProjectMetaData> | void): FeaturedProject;
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

export declare class ProjectcategoryProject {
  readonly id: string;
  readonly projectcategory: Projectcategory;
  readonly project: Project;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProjectcategoryProject, ProjectcategoryProjectMetaData>);
  static copyOf(source: ProjectcategoryProject, mutator: (draft: MutableModel<ProjectcategoryProject, ProjectcategoryProjectMetaData>) => MutableModel<ProjectcategoryProject, ProjectcategoryProjectMetaData> | void): ProjectcategoryProject;
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

export declare class FeaturedBlog {
  readonly id: string;
  readonly title?: string;
  readonly Feature_Blog?: Blogpost;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FeaturedBlog, FeaturedBlogMetaData>);
  static copyOf(source: FeaturedBlog, mutator: (draft: MutableModel<FeaturedBlog, FeaturedBlogMetaData>) => MutableModel<FeaturedBlog, FeaturedBlogMetaData> | void): FeaturedBlog;
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

export declare class BlogcategoryBlogpost {
  readonly id: string;
  readonly blogcategory: Blogcategory;
  readonly blogpost: Blogpost;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BlogcategoryBlogpost, BlogcategoryBlogpostMetaData>);
  static copyOf(source: BlogcategoryBlogpost, mutator: (draft: MutableModel<BlogcategoryBlogpost, BlogcategoryBlogpostMetaData>) => MutableModel<BlogcategoryBlogpost, BlogcategoryBlogpostMetaData> | void): BlogcategoryBlogpost;
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

export declare class SiteTitle {
  readonly id: string;
  readonly title?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SiteTitle, SiteTitleMetaData>);
  static copyOf(source: SiteTitle, mutator: (draft: MutableModel<SiteTitle, SiteTitleMetaData>) => MutableModel<SiteTitle, SiteTitleMetaData> | void): SiteTitle;
}

export declare class WorkExperience {
  readonly id: string;
  readonly job_title?: string;
  readonly description?: string;
  readonly job_start?: string;
  readonly job_end?: string;
  readonly job_place?: string;
  readonly job_bullets?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WorkExperience, WorkExperienceMetaData>);
  static copyOf(source: WorkExperience, mutator: (draft: MutableModel<WorkExperience, WorkExperienceMetaData>) => MutableModel<WorkExperience, WorkExperienceMetaData> | void): WorkExperience;
}