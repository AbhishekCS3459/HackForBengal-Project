import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import Article from "../components/Article";
import axios from "axios";

interface ArticleData {
  urlToImage: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  source: {
    name: string;
  };
  url: string;
}

const HomeScreen = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9",
        {
          params: {
            category: "general",
          },
        }
      )
      .then((response) => {
        // handle success
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  const renderItem = ({ item }: { item: ArticleData }) => (
    <Article
      urlToImage={item.urlToImage}
      title={item.title}
      description={item.description}
      author={item.author}
      publishedAt={item.publishedAt}
      sourceName={item.source.name}
      url={item.url}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
