import React from 'react';
import { withTheme } from 'styled-components';

export const Resource = withTheme(({ theme }) => (
  <svg
    viewBox="0 0 34 40"
    version="1.1"
    width="34"
    height="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      fill={theme.colors.deeppink}
      d="M11 36h12v-2H11zM14 40h6v-2h-6zM21.998 25.651l-.998.578V30h-3v-9.55l3.5-3.5-1.5-1.5-3 3-3-3-1.5 1.5 3.5 3.5V30h-3v-3.771l-.998-.578C8.917 23.863 7 20.549 7 17c0-5.514 4.486-10 10-10s10 4.486 10 10c0 3.549-1.917 6.863-5.002 8.651M17 5C10.373 5 5 10.373 5 17c0 4.439 2.417 8.306 6 10.382V32h12v-4.618c3.583-2.076 6-5.943 6-10.382 0-6.627-5.373-12-12-12M0 18h3v-2H0zM31 18h3v-2h-3zM16 3h2V0h-2zM4 28.718L5.282 30 7 28.283 5.718 27zM27 5.718L28.282 7 30 5.283 28.718 4zM27 28.282L28.718 30 30 28.717 28.282 27zM7 5.718L5.282 4 4 5.283 5.718 7z"
    />
  </svg>
));

export const Design = withTheme(({ theme }) => (
  <svg
    viewBox="0 0 50 30"
    version="1.1"
    width="50"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path
        fill={theme.colors.deeppink}
        id="a"
        d="M36.029 1h13.97v13.972H36.03z"
      />
    </defs>
    <g transform="translate(0 -1)" fill="none" fillRule="evenodd">
      <path
        fill={theme.colors.deeppink}
        d="M31.293 30.68l-12-12 1.414-1.415 12 12z"
      />
      <path
        fill={theme.colors.deeppink}
        d="M20.707 30.68l-1.414-1.415 12-12 1.414 1.414zM19.293 2.679l12 12 1.414-1.413-12-12.001z"
      />
      <path
        fill={theme.colors.deeppink}
        d="M19.293 13.266l1.414 1.414 12-12.001-1.414-1.414zM2 28.972h10v-10H2v10zm-2 2h14v-14H0v14z"
      />
      <mask id="b" fill={theme.colors.deeppink}>
        <use xlinkHref="#a" />
      </mask>
      <path
        d="M43.014 3a4.991 4.991 0 0 0-4.985 4.986 4.991 4.991 0 0 0 4.985 4.986A4.992 4.992 0 0 0 48 7.986 4.992 4.992 0 0 0 43.014 3m0 11.972c-3.852 0-6.985-3.134-6.985-6.986S39.162 1 43.014 1A6.993 6.993 0 0 1 50 7.986a6.993 6.993 0 0 1-6.986 6.986"
        fill={theme.colors.deeppink}
        mask="url(#b)"
      />
    </g>
  </svg>
));

export const Engineering = withTheme(({ theme }) => (
  <svg
    viewBox="0 0 39 32"
    version="1.1"
    width="39"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill={theme.colors.deeppink} fillRule="nonzero">
      <path d="M39 0H0v7.111h1.773V1.778h35.454v28.444H24.818V32H39z" />
      <path d="M1.773 30.222V7.112H0V32h24.818v-1.778z" />
      <path d="M4.432 10.667h10.636v1.778H4.432zm0 15.111h10.636v1.778H4.432zm12.409-15.111h3.545v1.778h-3.545zM4.432 16h3.545v1.778H4.432zm17.727-5.333h9.75v1.778h-9.75zM4.432 21.333h4.432v1.778H4.432zM9.75 16h1.773v1.778H9.75zm7.091 9.778h1.773v1.778h-1.773zM22.159 16h5.318v1.778h-5.318zm-8.864 0h7.091v1.778h-7.091zm-2.659 5.333h21.273v1.778H10.636z" />
    </g>
  </svg>
));

export const Training = withTheme(({ theme }) => (
  <svg
    viewBox="0 0 37 32"
    version="1.1"
    width="37"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path
        fill={theme.colors.deeppink}
        id="a"
        d="M.293.05h3.535v3.536H.293z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M25.25 18.5h-2c0 1.155-1.704 2.421-4.25 2.692V13.5h-2v7.692c-2.546-.271-4.25-1.537-4.25-2.692h-2c0 2.44 2.676 4.391 6.25 4.702v6.548h2v-6.548c3.574-.311 6.25-2.262 6.25-4.702"
        fill={theme.colors.deeppink}
      />
      <path
        d="M30.922 28.4c-.407.597-1.272 1.6-2.5 1.6H7.578c-1.229 0-2.094-1.003-2.5-1.6a6.375 6.375 0 0 1-1.063-3.777l.865.865c.92-.919 3.47-.42 5.657 1.768l1.414-1.414c-2.543-2.543-5.75-3.44-7.76-2.31.034-.125.065-.253.112-.37 1.385-3.51 3.952-5.182 6.918-6.856l.256-.145.137-.26c.826-1.568 3.208-3.9 6.385-3.9 3.176 0 5.56 2.332 6.385 3.9l.137.26.256.145c2.965 1.674 5.532 3.345 6.918 6.856.007.016.01.035.016.051-.769-.222-1.659-.225-2.629.017-1.509.377-3.059 1.305-4.366 2.612l1.414 1.414c1.04-1.039 2.292-1.799 3.437-2.086.968-.242 1.776-.126 2.22.318l.187-.187c-.076 1.074-.434 2.188-1.053 3.098m-4.914-13.695C24.665 12.39 21.663 10 18 10c-3.664 0-6.665 2.39-8.008 4.704-3.088 1.758-5.967 3.715-7.549 7.724-.845 2.14-.45 4.992.981 7.096C4.51 31.121 5.986 32 7.58 32h20.842c1.593 0 3.07-.879 4.155-2.476 1.431-2.104 1.825-4.956.981-7.096-1.583-4.009-4.46-5.966-7.549-7.724m-22.423-2.29l2.828-2.828L5 8.172 2.172 11zm2.121 2.122l2.829-2.83-1.415-1.413-2.828 2.828zM3.586 8.172L1.464 6.05.05 7.464l2.122 2.122zm26.878 1.414l2.83 2.828L34.706 11l-2.829-2.828zm2.122 3.535l-2.83-2.828-1.413 1.414 2.829 2.83z"
        fill={theme.colors.deeppink}
      />
      <g transform="translate(33 6)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill={theme.colors.deeppink}
          mask="url(#b)"
          d="M2.414.05L.294 2.172l1.413 1.414 2.121-2.122z"
        />
      </g>
      <path fill={theme.colors.deeppink} d="M14.625 8L26 5h-8l4-5-12 3h8z" />
    </g>
  </svg>
));

export const Rocket = withTheme(({ theme }) => (
  <svg
    viewBox="0 0 39 39"
    version="1.1"
    width="39"
    height="39"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.597 32.007l2.847-2.846.71.713-2.844 2.844-.713-.71zm-1.422-7.112l.712.71-2.846 2.845-.711-.71 2.845-2.845zm2.846 2.844l-2.846 2.846-.711-.712 2.846-2.845.711.711zm2.845 0l-1.422-1.422-.712-.711-1.422-1.423-2.135-2.133-5.691 5.69 7.826 7.823 5.69-5.69-2.134-2.134zM9.122 2.846l.711.71-2.845 2.845-.712-.71 2.846-2.845zm2.845 2.844L9.122 8.536l-.711-.712 2.845-2.845.711.711zm-.711 4.98l-.711-.712 2.845-2.845.712.71-2.846 2.846zm5.691-2.846l-4.269-4.268-1.422-1.423L9.122 0 3.431 5.69l7.825 7.824 5.691-5.69zm4.259 6.707a2.013 2.013 0 0 1 2.846 2.846 2.012 2.012 0 1 1-2.846-2.846zM9.146 35.589l-5.734-5.734 5.725-2.812 2.821 2.822-2.812 5.724zM0 29.29L9.714 39l4.685-9.54-4.857-4.856L0 29.288zm30.602-12.356L19.081 28.45l-8.536-8.535L22.064 8.398l8.704-.16-.166 8.695zM32.82 6.187l-11.604.214L7.699 19.915l11.382 11.381 13.517-13.514.222-11.595z"
      fill={theme.colors.deeppink}
      fillRule="evenodd"
    />
  </svg>
));

export const Pair = withTheme(({ theme }) => (
  <svg
    viewBox="0 0 49 41"
    version="1.1"
    width="49"
    height="41"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path id="a" d="M.67.139h31.375v16.862H.671z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill={theme.colors.slateblue} d="M0 41h32V9H0z" />
      <path
        d="M32 33h-2.028c0-6.602-5.37-11.972-11.973-11.972-6.6 0-11.971 5.37-11.971 11.972H4c0-7.72 6.28-14 14-14s14 6.28 14 14"
        fill={theme.colors.white}
      />
      <path
        d="M49 33h-2.028c0-6.602-5.37-11.972-11.973-11.972-6.6 0-11.971 5.37-11.971 11.972H21c0-7.72 6.28-14 14-14s14 6.28 14 14"
        fill={theme.colors.white}
      />
      <g transform="translate(10)">
        <mask id="b" fill={theme.colors.white}>
          <use xlinkHref="#a" />
        </mask>
        <path
          d="M16.358 11.54c.882 0 1.715.4 2.285 1.099A6.401 6.401 0 0 0 23.618 15a6.409 6.409 0 0 0 4.992-2.378c1.228-1.511 1.698-3.498 1.291-5.45-.524-2.511-2.587-4.493-5.132-4.932-2.36-.41-4.659.448-6.147 2.288a2.902 2.902 0 0 1-2.264 1.09c-.88 0-1.705-.397-2.265-1.09-1.488-1.84-3.785-2.696-6.147-2.288-2.545.438-4.608 2.42-5.132 4.932-.408 1.952.063 3.939 1.29 5.45A6.41 6.41 0 0 0 9.097 15a6.401 6.401 0 0 0 4.975-2.362 2.945 2.945 0 0 1 2.286-1.1M23.618 17a8.395 8.395 0 0 1-6.524-3.097.946.946 0 0 0-1.473 0A8.395 8.395 0 0 1 9.097 17a8.4 8.4 0 0 1-6.545-3.117C.943 11.904.325 9.309.857 6.764 1.547 3.457 4.26.847 7.607.27c3.09-.535 6.092.59 8.041 3a.917.917 0 0 0 1.42.002C19.015.86 22.015-.265 25.108.27c3.347.577 6.06 3.187 6.75 6.494.531 2.544-.087 5.139-1.696 7.12A8.4 8.4 0 0 1 23.618 17"
          fill={theme.colors.white}
          mask="url(#b)"
        />
      </g>
    </g>
  </svg>
));

export const Teams = withTheme(({ theme }) => (
  <svg
    viewBox="0 0 54 41"
    version="1.1"
    width="54"
    height="41"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path id="a" d="M0 .043h5.74v5.74H0z" />
      <path id="c" d="M0 .922h6.001v6.001H0z" />
      <path id="e" d="M0 .882h5.74v5.74H0z" />
      <path id="g" d="M.563.836h5.741v5.741H.564z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 41h32V9H0z" fill={theme.colors.slateblue} />
      <path
        d="M53.819 27.974a3 3 0 1 1-5.639 2.052 3 3 0 0 1 5.639-2.052m-25-12a3 3 0 1 1-5.635 2.052 3 3 0 0 1 5.635-2.052"
        fill={theme.colors.white}
      />
      <path
        fill={theme.colors.white}
        d="M50.194 30L27 18.789 27.806 17 51 28.211zm-10.107-1.244a2.87 2.87 0 1 1-5.395 1.964 2.87 2.87 0 0 1 5.395-1.964"
      />
      <g transform="translate(10 15.391)">
        <mask id="b" fill={theme.colors.white}>
          <use xlinkHref="#a" />
        </mask>
        <path
          d="M5.567 1.931A2.87 2.87 0 1 1 .176 3.895a2.87 2.87 0 0 1 5.39-1.964"
          fill={theme.colors.white}
          mask="url(#b)"
        />
      </g>
      <path
        fill={theme.colors.white}
        d="M36.985 30.606L13.692 19.743l.809-1.733 23.293 10.862zm-22.847-3.759a2.87 2.87 0 1 1-2.426 5.202 2.87 2.87 0 0 1 2.426-5.202"
      />
      <path
        fill={theme.colors.white}
        d="M27.243 25.255l-12.72 4.63-.654-1.799 11.874-4.32"
      />
      <g transform="translate(10 1)">
        <mask id="d" fill={theme.colors.white}>
          <use xlinkHref="#c" />
        </mask>
        <path
          d="M.182 4.949A3 3 0 1 1 5.82 2.895 3 3 0 0 1 .182 4.949"
          fill={theme.colors.white}
          mask="url(#d)"
        />
      </g>
      <path
        d="M35.181 17.026a3 3 0 1 1 5.635-2.052 3 3 0 0 1-5.635 2.052"
        fill={theme.colors.white}
      />
      <path
        fill={theme.colors.white}
        d="M12.806 4L36 15.211 35.194 17 12 5.789z"
      />
      <g transform="translate(23.391)">
        <mask id="f" fill={theme.colors.white}>
          <use xlinkHref="#e" />
        </mask>
        <path
          d="M.174 4.734a2.87 2.87 0 1 1 5.393-1.965A2.87 2.87 0 0 1 .174 4.734"
          fill={theme.colors.white}
          mask="url(#f)"
        />
      </g>
      <g transform="translate(47.348 11.478)">
        <mask id="h" fill={theme.colors.white}>
          <use xlinkHref="#g" />
        </mask>
        <path
          d="M.737 4.689a2.87 2.87 0 1 1 5.391-1.964A2.87 2.87 0 0 1 .737 4.689"
          fill={theme.colors.white}
          mask="url(#h)"
        />
      </g>
      <path
        fill={theme.colors.white}
        d="M26.667 2.884L49.96 13.746l-.81 1.734L25.858 4.617zm22.847 3.759A2.869 2.869 0 1 1 51.94 1.44a2.869 2.869 0 0 1 1.387 3.813 2.867 2.867 0 0 1-3.813 1.389"
      />
      <path
        fill={theme.colors.white}
        d="M36.408 8.235l12.72-4.63.655 1.8-11.875 4.32"
      />
    </g>
  </svg>
));

export const Blog = withTheme(({ theme }) => (
  <svg
    viewBox="0 0 39 40"
    version="1.1"
    width="39"
    height="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path fill={theme.colors.slateblue} d="M0 40h32V8H0z" />
      <path
        fill={theme.colors.white}
        d="M28 38l-5-2-5 2V24h10zm2-13h7v-2h-7zm0 3h7v-2h-7zm0 3h7v-2h-7z"
      />
      <path
        d="M37 33H10c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h27v19h2V0H10a7 7 0 0 0-7 7v21a7 7 0 0 0 7 7h29v-2h-2z"
        fill={theme.colors.white}
      />
      <path
        d="M37 33H10c-2.757 0-5-2.243-5-5v-2c0-2.757 2.243-5 5-5h29v-2H10a7 7 0 0 0-7 7v2a7 7 0 0 0 7 7h29v-2h-2z"
        fill={theme.colors.white}
      />
    </g>
  </svg>
));

export const Clock = withTheme(({ theme }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M12.706 11.966l3.093 2.836-.954 1.04-3.55-3.255V6.353h1.41v5.613zm5.372-7.042l.998.998-1.41 1.41-.998-.999 1.41-1.41zM6.334 16.669l.998.998-1.41 1.409-.998-.998 1.41-1.41zm11.332 0l1.41 1.409-.998.998-1.41-1.41.998-.997zM5.922 4.924l1.41 1.41-.998.997-1.41-1.41.998-.997zm13.386 7.782h1.993v-1.412h-1.993v1.412zm-16.61 0h1.994v-1.412H2.699v1.412zm8.596 8.595h1.412v-1.993h-1.412v1.993zm0-16.609h1.412V2.699h-1.412v1.993zM12 22.588c-5.838 0-10.588-4.75-10.588-10.588C1.412 6.162 6.162 1.412 12 1.412c5.838 0 10.588 4.75 10.588 10.588 0 5.838-4.75 10.588-10.588 10.588zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
      fill={theme.colors.deeppink}
      fillRule="evenodd"
    />
  </svg>
));
