import React from "react";
import FeatureHero from "../FeatureHero";
import Reviews from "../Pricing/review-slider";
import Diagram from "./diagram";
import KubernetesDark from "../../assets/images/AWS-Diagram/aws.svg";
import KubernetesLight from "../../assets/images/AWS-Diagram/aws-light.svg";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const KubernetesDiagramPage = () => {
  const { isDark } = useStyledDarkMode();

  let data = {
    heading: "Kubernetes Architecture Diagram Tool",
    sub_heading: "Create Kubernetes diagrams easily with predefined templates and symbols designed for professionals.",
    image: isDark ? KubernetesDark : KubernetesLight
  };
  return (
    <>
      <FeatureHero data={data} />
      <Diagram />
      <Reviews />
    </>
  );
};

export default KubernetesDiagramPage;
