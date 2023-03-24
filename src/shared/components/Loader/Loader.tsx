import { StyledLoaderBlock } from './styles';

export const Loader = () => {
  return (
    <StyledLoaderBlock>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      />
      <rect x="22.5" y="46" width="5" height="8" fill="#220b09">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="0.7042253521126761s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="42.8;46;46"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.14084507042253522s"
        />
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="0.7042253521126761s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="14.4;8;8"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.14084507042253522s"
        />
      </rect>
      <rect x="47.5" y="46" width="5" height="8" fill="#d34c31">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="0.7042253521126761s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="43.6;46;46"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.07042253521126761s"
        />
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="0.7042253521126761s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="12.8;8;8"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.07042253521126761s"
        />
      </rect>
      <rect x="72.5" y="46" width="5" height="8" fill="#e88432">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="0.7042253521126761s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="43.6;46;46"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        />
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="0.7042253521126761s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="12.8;8;8"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        />
      </rect>
    </StyledLoaderBlock>
  );
};
