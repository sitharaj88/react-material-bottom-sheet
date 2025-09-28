import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import MountainSvg from '@site/static/img/undraw_docusaurus_mountain.svg';
import TreeSvg from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactSvg from '@site/static/img/undraw_docusaurus_react.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Material Design at Home',
    Svg: MountainSvg,
    description: (
      <>
        Pixel-perfect transitions, elevation, and motion that match the native
        Android bottom sheet so your web app feels instantly familiar.
      </>
    ),
  },
  {
    title: 'Flexible Snap Points',
    Svg: TreeSvg,
    description: (
      <>
        Define custom snap positions, drag thresholds, and fling behaviour to
        fit any UX—from simple modals to multi-step workflows.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    Svg: ReactSvg,
    description: (
      <>
        Built in TypeScript with sensible defaults, accessibility helpers, and
        composable props so you can ship confidently and iterate fast.
      </>
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
