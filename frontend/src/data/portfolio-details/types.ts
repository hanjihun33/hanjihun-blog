export type PortfolioImplementationItem =
  | string
  | {
      title: string;
      details: string[];
      techStack?: string;
      usage?: string;
    };

export type PortfolioProblemItem = {
  title: string;
  symptoms: string[];
  causes: string[];
  checks: string[];
};

export type PortfolioComparisonItem = {
  label: string;
  before: string;
  after: string;
};

export type PortfolioSolutionStep = {
  title: string;
  details: string[];
};

export type PortfolioProjectDetail = {
  teamSize: string;
  responsibilities: string;
  demoVideoUrl?: string;
  description: string;
  implementation: PortfolioImplementationItem[];
  problems?: PortfolioProblemItem[];
  improvementFlow?: {
    before: string[];
    after: string[];
  };
  beforeAfter?: PortfolioComparisonItem[];
  solutionProcess?: PortfolioSolutionStep[];
  roleSummary: string;
  roleDetails: string[];
  techSelectionReasons: string[];
  outcomes: string[];
  review: string[];
};
