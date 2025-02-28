import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
}; 