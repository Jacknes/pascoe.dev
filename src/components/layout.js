import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import Bio from '../components/bio';
import Navigation from '../components/navigation';
import GlobalStyles from '../components/GlobalStyles';

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props;

        const rootPath = `${__PATH_PREFIX__}/`;
        const onRoot = location.pathname === rootPath;
        const theme = {
            background: 'white',
            text: 'black',
        };
        return (
            <ThemeProvider theme={theme}>
                <Root>
                    <GlobalStyles />
                    <Sidebar onRoot={onRoot} key="1">
                        <Heading>
                            <StyledLink to={`/`}>
                                {/* {title} */}
                                Jack Pascoe
                                {/* <Name>Jack Pascoe</Name> */}
                                <Name>Exploring Coffee & Code.</Name>
                            </StyledLink>
                        </Heading>
                        <Navigation onRoot={onRoot} />
                        {/* <Bio /> */}
                    </Sidebar>
                    <Main>{children}</Main>
                </Root>
            </ThemeProvider>
        );
    }
}

const Root = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 16px;
    overflow: scroll;
    height: 100vh;
    width: 100vw;
`;

const Name = styled.span`
    display: block;
    font-size: 18px;
    margin-top: 8px;
`;

const Sidebar = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 25%;
    /* padding-right: 36px; */
    padding-top: 16px;
    margin-right: 16px;

    animation: ${p => (p.onRoot ? 'fadein 1.5s' : 'none')};
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const StyledLink = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
    width: 75%;
`;

const Heading = styled.h1`
    margin-top: 0;
`;

export default Layout;
