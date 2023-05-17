import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Icon } from '@iconify/react';
/* COMPONENTS */
import Markdown from '@site/src/components/utilities/Markdown';
import PageHeader from '@site/src/components/layout/PageHeader';
import SectionHeader from '@site/src/components/layout/SectionHeader';
import ColoringBookSection from '@site/src/components/content/ColoringBookSection';
import ArticleCard from '@site/src/components/ui/ArticleCard';
import FeaturesCarousel from '@site/src/components/content/FeaturesCarousel';
/* PAGE DATA */
import { header, knowPodman, learnMore } from '@site/static/data/features';
import PlayOnScroll from '@site/src/components/utilities/PlayOnScroll';

/* PAGE COMPONENTS */
function GetToKnowPodmanSection() {
  return (
    <section className="mb-8 mt-4 lg:mt-8 xl:mb-12">
      <SectionHeader title={knowPodman.title} textColor="text-blue-700 dark:text-blue-500" />
      <div className="container flex flex-wrap justify-center gap-4 lg:gap-8">
        {knowPodman.cards.map((card, index) => {
          return (
            <article key={index} className="mt-2 flex flex-col justify-start rounded-md p-4 text-center lg:mt-4">
              <div>
                <h3 className="mb-4 font-medium dark:text-blue-500 xl:mb-6">{card.title}</h3>
                <Markdown text={card.description} styles="max-w-xs" />
              </div>
              <img src={card.image.path} alt={card.image.alt} className="order-first my-2 h-52 w-auto object-contain" />
            </article>
          );
        })}
      </div>
    </section>
  );
}

const PodmanDesktopSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 pb-5 dark:bg-gray-900 dark:from-gray-700/25 dark:to-gray-900">
      <div className="align-center container flex justify-center">
        <div className="flex-row content-center">
          <h2 className="content-center">
            <a className="hover:no-underline hover:text-white active:text-white visited:text-white dark:hover:text-white dark:active:text-white dark:visited:text-white text-4xl mb-5 px-5  bg-blue-500 no-underline text-white dark:bg-blue-700 dark:text-white" href="https://podman-desktop.io">Podman Desktop</a>
          </h2>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row items-center">
        <div id="imgdiv" className="mx-auto w-full md:w-auto">
          <img id="pdlogo" className="mx-auto" src="logos/optimized/podman-desktop-logo-200w-198h.webp" />
        </div>
        <div className="md:w-1/2 xl:w-3/4">
          <p className="my-8 align-middle text-2xl leading-relaxed">
            <a className="font-semibold hover:text-purple-500 text-purple-900 no-underline text-2xl leading-releaxed" href="https://podman-desktop.io">Podman Desktop</a> is Podman's graphical application that makes it easy to install and work with Podman (and
            other container engines) on Windows, MacOS, and Linux.
          </p>
        </div>
      </div>
    </section>
  );
};

const ManageContainersUISection = () => {
  return (
    <section className="xl:py-16 xl:flex xl:flex-row-reverse bg-gradient-to-b from-purple-100 to-purple-300 dark:from-black dark:to-gray-900">
      <div className="flex-1 w-full md:my-16 md:w-4/5 md:mx-auto lg:w-full xl:my-16">
        <PlayOnScroll vidFormat="video/mp4" url="video/ui/containers.mp4" posterImg="images/optimized/ui-screens/ui-manage-containers.webp" styles="rounded-lg w-full lg:w-3/4 lg:mx-auto xl:mr-0 xl:w-full max-w-[1200px] items-center md:rounded-3xl bg-cover md:bg-contain xl:rounded-r-none" />
      </div>
      <div className="flex flex-1 my-16 md:my-none">
        <div className="flex-row px-16 xl:p-16 x2l:my-16 md:w-4/5 md:mx-auto">
          <h3 className="mb-5 dark:text-white">Manage containers (not just Podman.)</h3>
          <p className="mb-3 dark:text-white">
            Podman Desktop allows you to list, view, and manage containers from multiple supported container
            engines* in a single unified view.
          </p>
          <p className="mb-3 dark:text-white">
            Gain easy access to a shell inside the container, logs, and basic controls.
          </p>
          <em className="mt-10 block dark:text-white">
            * Supported engines and orchestrators include Podman, Docker, Lima, kind, Red Hat OpenShift, Red Hat 
            OpenShift Developer Sandbox.
          </em>
        </div>
      </div>
    </section>
  );
};

const BuildImagesUISection = () => {
  return (
  <section className="xl:py-16 xl:flex xl:flex-row bg-gradient-to-b from-purple-100 to-purple-300 dark:from-black dark:to-gray-900 xl:dark:from-gray-900 xl:dark:to-black">
    <div className="flex-1 w-full md:my-16 md:w-4/5 md:mx-auto lg:w-full xl:my-16">
      <PlayOnScroll vidFormat="video/mp4" url="video/ui/images.mp4" posterImg="images/optimized/ui-screens/ui-buildimage.webp" styles="rounded-lg w-full lg:w-3/4 lg:mx-auto xl:ml-0 xl:w-full max-w-[1200px] items-center md:rounded-3xl bg-cover md:bg-contain xl:rounded-l-none" />
    </div>
    <div className="flex flex-1 my-16 md:my-none">
      <div className="flex-row px-16 xl:p-16 x2l:my-16 md:w-4/5 md:mx-auto">
        <h3 className="mb-5 dark:text-white">Build, pull, and push images.</h3>
        <p className="mb-3 dark:text-white">
          Build containers from a Dockerfile / Containerfile, or pull images from remote repositories to run.
        </p>
        <p className="mb-3 dark:text-white">
          Manage accounts for and push your images to multiple container registries.
        </p>
      </div>
    </div>
  </section>
  );
};

const CreatePodsUISection = () => {
  return (
    <section className="xl:py-16 xl:flex xl:flex-row-reverse bg-gradient-to-b from-purple-100 to-purple-300 dark:from-black dark:to-gray-900">
    <div className="flex-1 w-full md:my-16 md:w-4/5 md:mx-auto lg:w-full xl:my-16">
      <PlayOnScroll vidFormat="video/mp4" url="video/ui/podify.mp4" posterImg="images/optimized/ui-screens/ui-podify.webp" styles="rounded-lg w-full lg:w-3/4 lg:mx-auto xl:mr-0 xl:w-full max-w-[1200px] items-center md:rounded-3xl bg-cover md:bg-contain xl:rounded-r-none" />
    </div>
    <div className="flex flex-1 my-16 md:my-none">
      <div className="flex-row px-16 xl:p-16 x2l:my-16 md:w-4/5 md:mx-auto">
        <h3 className="mb-5 dark:text-white">Podify containers into pods.</h3>
        <p className="mb-3 dark:text-white">
          Create pods by selecting containers to run together. View unified logs for your pods and inspect the
          containers inside each.
        </p>
        <p className="mb-3 dark:text-white">
        Play Kubernetes YAML locally, without Kubernetes, and generate Kubernetes YAML from Pods.
        </p>
      </div>
    </div>
  </section>
  );
};

const DeployToKubernetesUISection = () => {
  return (
  <section className="xl:py-16 md:pb-32 xl:flex xl:flex-row bg-gradient-to-b from-purple-100 to-purple-300  dark:from-black dark:to-gray-900 xl:dark:from-gray-900 xl:dark:to-black">
    <div className="flex-1 w-full md:my-16 md:w-4/5 md:mx-auto lg:w-full xl:my-16">
      <PlayOnScroll vidFormat="video/mp4" url="video/ui/kubernetes.mp4" posterImg="images/optimized/ui-screens/ui-k8sdeploy.webp" styles="rounded-lg w-full lg:w-3/4 lg:mx-auto xl:ml-0 xl:w-full max-w-[1200px] items-center md:rounded-3xl bg-cover md:bg-contain xl:rounded-l-none" />
    </div>
    <div className="flex flex-1 my-16 md:my-none">
      <div className="flex-row px-16 xl:p-16 x2l:my-16 md:w-4/5 md:mx-auto">
        <h3 className="mb-5 dark:text-white">Deploy to Kubernetes.</h3>
        <p className="mb-3 dark:text-white">
          Deploy pods from Podman Desktop to local or remote Kubernetes contexts using automatically-generated
          YAML config.
        </p>
      </div>
    </div>
  </section>
  );
};

const PodmanCLISection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100  pb-5 dark:from-gray-700/25  dark:to-gray-900">
      <div className="align-center container mb-8 flex justify-center xl:mb-20">
        <div className="flex-row content-center">
          <h2 className="mb-5 content-center bg-blue-700 pl-5 pr-5 text-white dark:text-white">Podman Command-Line</h2>
        </div>
      </div>
      <div className="container mb-4 grid gap-2 lg:grid-cols-3">
        <div className="mx-auto">
          <img className="max-h-[200px]" src="images/raw/podman-selkie-385w-358h.png" />
        </div>
        <div className="col-span-2">
          <p className="my-8 align-middle text-2xl leading-relaxed">
            Podman's command-line interface allows you to find, run, build, and share containers.
          </p>
        </div>
      </div>
    </section>
  );
};

const LearnArticles = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(
        'https://blog.podman.io/wp-json/wp/v2/posts?per_page=4&_fields=id, author_info, title, wbDate, jetpack_featured_media_url, link, excerpt',
      );
      const jsonData = await rawData.json();
      setBlogData(jsonData);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <section className="my-4 lg:my-0">
      <header className="container mb-4 text-center lg:mb-8 lg:text-start">
        <h3 className="font-medium text-blue-700 dark:text-blue-500">{learnMore.blogPosts.title}</h3>
      </header>
      <div className="flex flex-col gap-4">
        {blogData.map((card, index) => {
          if (index < 2) {
            return (
              <ArticleCard
                title={card.title.rendered}
                author_link={card.author_info.author_link}
                display_name={card.author_info.display_name}
                subtitle={card.excerpt.rendered}
                date={card.wbDate}
                imgSrc={card.jetpack_featured_media_url}
                path={card.link}
                altLayout
                key={card.id}
              />
            );
          }
        })}
        <p className="ml-2l text-center 2xl:text-start">
          Check out more posts about Podman{' '}
          <a
            href="https://blog.podman.io"
            target="_blank"
            className="underline-offset-4 transition duration-150 ease-linear hover:text-purple-700 dark:hover:text-purple-500">
            on our Blog!
          </a>
        </p>
      </div>
    </section>
  );
};

const LearnResources = () => {
  return (
    <section className="mt-4 lg:my-0">
      <header className="container mb-6 text-center xl:mb-8 xl:text-start">
        <h3 className="font-medium text-blue-700 dark:text-blue-500">{learnMore.resources.title}</h3>
      </header>
      <div>
        <ul className="mb-10 mt-4 flex flex-col gap-6 sm:flex-row lg:mb-16 lg:mt-8 lg:gap-4 xl:flex-col">
          {learnMore.resources.cards.map((card, index) => {
            return (
              <li key={index}>
                <a
                  href={card.path}
                  className="mx-auto flex h-32 max-w-lg flex-col items-center justify-center gap-4 rounded-md bg-gray-100 p-4 text-center text-purple-700 underline-offset-4 transition duration-150 ease-linear hover:bg-purple-700 hover:text-purple-50 hover:shadow-md dark:bg-gray-700 dark:hover:bg-purple-900 dark:hover:text-white lg:h-auto lg:flex-row xl:justify-start">
                  <span>{card.text}</span>
                  <Icon icon={card.icon} className="order-first hidden lg:block" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const LearnMoreSection = () => {
  return (
    <section>
      <SectionHeader title={learnMore.title} textGradient={true} textGradientStops="from-purple-500 to-purple-900" />
      <div className="container mt-8 flex flex-wrap justify-center gap-24">
        <LearnArticles />
        <LearnResources />
      </div>
    </section>
  );
};

function Features() {
  return (
    <Layout>
      <PageHeader title={header.title} description={header.subtitle} />
      <GetToKnowPodmanSection />
      <PodmanDesktopSection />
      <ManageContainersUISection />
      <BuildImagesUISection />
      <CreatePodsUISection />
      <DeployToKubernetesUISection />
      <PodmanCLISection />
      <FeaturesCarousel />
      <LearnMoreSection />
      <ColoringBookSection />
    </Layout>
  );
}

export default Features;
