// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SubHero, Hero, FeaturePriority, Feature, Project, Blogpost, BlogcategoryBlogpost, Blogcategory, CertIssuer, Certificates, CurrentWork, SiteTitle, WorkExperience, Projectcategory } = initSchema(schema);

export {
  SubHero,
  Hero,
  FeaturePriority,
  Feature,
  Project,
  Blogpost,
  BlogcategoryBlogpost,
  Blogcategory,
  CertIssuer,
  Certificates,
  CurrentWork,
  SiteTitle,
  WorkExperience,
  Projectcategory
};