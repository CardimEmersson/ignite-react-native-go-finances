import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardData,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

const data: TransactionCardData[] = [
  {
    id: "1",
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: { name: "Vendas", icon: "dollar-sign" },
    date: "13/04/2021",
    type: "positive",
  },
  {
    id: "2",
    title: "Hamburgueria Pizzy",
    amount: "R$ 59,00",
    category: { name: "Alimentação", icon: "coffee" },
    date: "13/04/2021",
    type: "negative",
  },
  {
    id: "3",
    title: "Aluguel do apartamento",
    amount: "R$ 1.200,00",
    category: { name: "Casa", icon: "shopping-bag" },
    date: "13/04/2021",
    type: "negative",
  },
];

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/CardimEmersson.png" }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Emersson</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
