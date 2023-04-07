import styled, { createGlobalStyle } from 'assets/themes';
import breakpoints from 'assets/themes/breakpoints';

export const CSSReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;

    transition: all 0.3s ease-in-out;
  }

  html, body {
    margin: 0;
    padding: 0;

  }

  #root {
    background: ${(props) => props.theme.colors.background};
    width: 100%;
    height: 100vh;
    overflow: auto;

    ::-webkit-scrollbar {
      width: .375rem;
      &-thumb {
        border-radius: .75rem;
        background: #ccc;
      }
    }
  }
  
`;

export const Headings = createGlobalStyle`
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    color: ${(props) => props.theme.colors.text};
  }
  h1, h2, h3, h4 {
    font-weight: 400;
  }
  h5, h6 {
    font-weight: 600;
    letter-spacing: .125rem;
  }
  h1 {
    font-size: 67.344px;
    line-height: 4.5rem;
    letter-spacing: 0;
  }
  h2 {
    font-size: 50.512px;
    line-height: 4rem;
    letter-spacing: 0;
  }
  h3 {
    font-size: 37.904px;
    line-height: 3rem;
    letter-spacing: 0;
  }
  h4 {
    font-size: 28.432px;
    line-height: 2.5rem;
    letter-spacing: 0;
  }
  h5 {
    font-size: 21.328px;
    line-height: 1.5rem;
    letter-spacing: 0;
  }
  h6 {
    font-size: 16px;
    line-height: 1.5rem;
    letter-spacing: 0;
  }

  @media only screen and (max-width: ${breakpoints.lg}) {
    h1 {
      font-size: 28.832px;
      line-height: 2.5rem;
    }
    h2 {
      font-size: 25.632px;
      line-height: 2.5rem;
    }
    h3 {
      font-size: 22.784px;
      line-height: 2rem;
    }
    h4 {
      font-size: 20.256px;
      line-height: 2rem;
    }
    h5 {
      font-size: 18px;
      line-height: 1.5rem;
    }
    h6 {
      font-size: 16px;
      line-height: 1.5rem;
      letter-spacing: 0;
    }
  }
`;

export const Section = styled.div`
  width: 100%;
  min-height: 100vh;

  @media only screen and (max-width: ${breakpoints.md}) {
    padding: 1.5rem;
  }
`;

export const Stripe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  padding: 4.375rem 0;
  min-height: 12.5rem;

  background: ${(props) => props.theme.colors.backgroundHighlighted};
`;

export const IconWithText = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
`;
