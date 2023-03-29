import React from "react";
import './main.module.scss'
import { hot } from "react-hot-loader/root";
import { Layout } from './shared/Layout/Layout'
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
