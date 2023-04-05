import React from "react";
import './main.module.scss'
import { hot } from "react-hot-loader/root";
import { Layout } from './shared/Layout/Layout'
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { Dropdown } from "./shared/Dropdown";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <div style={{ padding: 50 }}>
          <br />
          <Dropdown
          onClose={() => console.log('closed')}
          onOpen={() => console.log('opened')}
          isOpen={false}
          button={ <button>Test</button> }>
            <CardsList />
          </Dropdown>
        </div>
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
