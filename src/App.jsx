import { Button, Input, Card, Layout, Typography } from "antd";
import "antd/dist/reset.css"; // Estilo global
import React, { useState } from "react";

const { Header, Footer } = Layout;
const { Title } = Typography;

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "f40f1ea9954f4bb59c123837240312";
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <Layout style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Barra Superior */}
      <Header
        style={{
          backgroundColor: "#1890ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <Title level={3} style={{ color: "#fff", margin: 0, textAlign: "center" }}>
          Escolha um lugar para ver o clima!
        </Title>
      </Header>

      {/* Conteúdo Principal */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <Input
            placeholder="Digite o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Button type="primary" onClick={fetchWeather} block>
            Consultar Clima
          </Button>
          {weather && (
            <Card title={weather.location.name} style={{ marginTop: "20px" }}>
              <img
                src={weather.current.condition.icon}
                alt="Clima"
                style={{ width: "50px" }}
              />
              <p>Temperatura: {weather.current.temp_c}°C</p>
              <p>Descrição: {weather.current.condition.text}</p>
            </Card>
          )}
        </div>
      </div>

      {/* Rodapé */}
      <Footer style={{ textAlign: "center", background: "#f0f2f5", padding: "10px" }}>
        <p><strong>Breno Siqueira Martins de Oliveira</strong></p>
        <p>Telefone: (82) 9 8131-6407</p>
        <p>Email: <a href="mailto:breno.sique@hotmail.com">breno.sique@hotmail.com</a></p>
      </Footer>
    </Layout>
  );
};

export default WeatherApp;
