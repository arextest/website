import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
      title: <Translate>Normal API Testing</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate>
          Send requests to an API and evaluating the responses to ensure they meet the specified requirements and function as intended,with features like development, execution, verification, and management of test cases.
      </Translate>
    ),
  },
  {
    title: <Translate>API Comparison Testing</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>
          Verify the APIs are functioning as intended after a backend system re-architecture or upgrade by sending the same request message to APIs in different environments and comparing the differences in the response messages.
      </Translate>
    ),
  },
  {
      title: <Translate>Traffic Recording and Replay</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
          Record the real online traffic with the third-party dependency data, time and local cache type data, etc. mocked. Replay the traffic in testing environment to test the correctness of code logic.
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
