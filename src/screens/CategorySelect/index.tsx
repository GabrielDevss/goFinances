import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { 
  Container, 
  Header, 
  Title, 
  Category,
  Icon, 
  Name,
  Separator,
} from "./styles";
import { Button } from "../../components/Form/Button";
import { categories } from "../../Utils/categories";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {

  function handleCategorySelect(category: Category) {
    setCategory(category);
    closeSelectCategory();
  }


  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
}
