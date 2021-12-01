import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HeroMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeaturePriorityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeatureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
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

type CertIssuerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CertificatesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CurrentWorkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SiteTitleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkExperienceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectcategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Hero {
  readonly id: string;
  readonly headline?: string;
  readonly subheading?: (string | null)[];
  readonly heroimage?: (string | null)[];
  readonly imagealt?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Hero, HeroMetaData>);
  static copyOf(source: Hero, mutator: (draft: MutableModel<Hero, HeroMetaData>) => MutableModel<Hero, HeroMetaData> | void): Hero;
}

export declare class FeaturePriority {
  readonly id: string;
  readonly priority?: string;
  readonly Feature?: Feature;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FeaturePriority, FeaturePriorityMetaData>);
  static copyOf(source: FeaturePriority, mutator: (draft: MutableModel<FeaturePriority, FeaturePriorityMetaData>) => MutableModel<FeaturePriority, FeaturePriorityMetaData> | void): FeaturePriority;
}

export declare class Feature {
  readonly id: string;
  readonly Project?: Project;
  readonly Blogpost?: Blogpost;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Feature, FeatureMetaData>);
  static copyOf(source: Feature, mutator: (draft: MutableModel<Feature, FeatureMetaData>) => MutableModel<Feature, FeatureMetaData> | void): Feature;
}

export declare class Project {
  readonly id: string;
  readonly title?: string;
  readonly info?: string;
  readonly github?: string;
  readonly link?: string;
  readonly projectcategoryID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
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

export declare class Projectcategory {
  readonly id: string;
  readonly category?: string;
  readonly ProjectcategoryProjects?: (Project | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Projectcategory, ProjectcategoryMetaData>);
  static copyOf(source: Projectcategory, mutator: (draft: MutableModel<Projectcategory, ProjectcategoryMetaData>) => MutableModel<Projectcategory, ProjectcategoryMetaData> | void): Projectcategory;
}