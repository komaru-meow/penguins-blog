import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AlmaLinux',
    Svg: require('@site/static/img/almalinux.svg').default,
    description: (
      <>
        <a href="https://drive.google.com/drive/folders/1KVd6uRlX5bwICCCuWcX42uxHj3vJRK3T">&nbsp;Almalinux&nbsp;</a>
      </>
    ),
  },
  {
    title: 'Arch',
    Svg: require('@site/static/img/arch.svg').default,
    description: (
      <>
        Adding <a href="https://drive.google.com/drive/folders/1qWh-hWjldQpb6TWSDY9h8tKdD4VadkOr">&nbsp;Arch&nbsp;</a>
        was laborious, but it was possible, because the project started and evolved to be as universal as possible.
      </>
    ),
  },
  {
    title: 'Debian',
    Svg: require('@site/static/img/debian.svg').default,
    description: (
      <>
        Penguins' eggs started on Debian in 2017, it still supports jessie, stretch, buster, bullseye,
        <a href="https://drive.google.com/drive/folders/18QIqicyecLMuU1Zmb2E039gWawzZuy3e">&nbsp;bookworm&nbsp;</a>
        and <a href="https://drive.google.com/drive/folders/195I7mSh35kLhQ-39C7Lu7PvueJHx7jgh">&nbsp;trixie&nbsp;</a>
      </>
    ),
  },
  {
    title: 'Devuan',
    Svg: require('@site/static/img/devuan.svg').default,
    description: (
      <>
        Devuan:&nbsp;
        <a href="https://drive.google.com/drive/folders/1EIuPNQbQf6iw0VUOgDZ2EAVhlpPzGFhh">&nbsp;daedalus</a>
        <a href="https://drive.google.com/drive/folders/1fi3PLk8LXJ4o4TLjIJR8wBDWzbxT_2__">&nbsp;excalibur</a>, 
      </>
    ),
  },
  {
    title: 'fedora',
    Svg: require('@site/static/img/fedora.svg').default,
    description: (
      <>
      <a href="https://drive.google.com/drive/folders/1B8am7G3FSxCD8rCLcyysDGTJD0GVUMhY">Fedora 41</a>
      </>
    ),
  },
  {
    title: 'Linuxmint',
    Svg: require('@site/static/img/linuxmint.svg').default,
    description: (
      <>
        <a href="https://drive.google.com/drive/folders/1perjMEKAo5F-ezb2TXbae5dACstJ5VAl">&nbsp;Linuxmint</a> and virtually every Debian, Devuan and Ubuntu derivatives are supported. 
      </>
    ),
  },
  {
    title: 'Manjaro',
    Svg: require('@site/static/img/manjaro.svg').default,
    description: (
      <>
        penguins-eggs is part of community repo of <a href="https://drive.google.com/drive/folders/1perjMEKAo5F-ezb2TXbae5dACstJ5VAl">Manjaro</a>.
      </>
    ),
  },
  {
    title: 'openmamba',
    Svg: require('@site/static/img/openmamba.svg').default,
    description: (
      <>
        <a href="https://drive.google.com/drive/folders/1-7LbgkKIrp8hUFTbO3qGtPKzaHter6RM">openmamba</a>
      </>
    ),
  },
  {
    title: 'OpenSuSE',
    Svg: require('@site/static/img/opensuse.svg').default,
    description: (
      <>
        <a href="https://drive.google.com/drive/folders/1MzrJrEbx8RJiX2NIlbgoVojH7vtosaMo">OpenSuSE</a>.
      </>
    ),
  },
  {
    title: 'Rocky',
    Svg: require('@site/static/img/rocky.svg').default,
    description: (
      <>
        <a href="https://drive.google.com/drive/folders/1perjMEKAo5F-ezb2TXbae5dACstJ5VAl">RockyLinux</a>.
      </>
    ),
  },
  {
    title: 'Ubuntu',
    Svg: require('@site/static/img/ubuntu.svg').default,
    description: (
      <>
        Ubuntu is full supported: 
        <a href="https://drive.google.com/drive/folders/1perjMEKAo5F-ezb2TXbae5dACstJ5VAl">&nbsp;bionic</a>,
        <a href="https://drive.google.com/drive/folders/1perjMEKAo5F-ezb2TXbae5dACstJ5VAl">&nbsp;noble</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
