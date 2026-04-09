import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout title="Project Documentation" description="Free documentation on GitHub Pages">
      <main className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            <h1>Project Documentation</h1>
            <p>Fast, free docs powered by Docusaurus and GitHub Pages.</p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Open Docs
              </Link>
              <Link className="button button--secondary button--lg" to="/getting-started">
                Quick Start
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
