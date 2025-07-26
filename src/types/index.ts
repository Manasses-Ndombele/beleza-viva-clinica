export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  specialty: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image: string;
}

export interface BeforeAfter {
  id: string;
  title: string;
  before: string;
  after: string;
  treatment: string;
}