import { Button, Checkbox, Container, Flex, FormLabel, Icon, Switch, Text, useToast } from "@chakra-ui/react";
import { darken } from "polished";
import { ChangeEvent, useEffect, useState } from "react";
import { Image } from "../components/Image";
import { Section } from "../components/Section";
import { theme } from "../styles/theme";
import Router from 'next/router'
import { Header } from "../components/Header";
import { MainHero } from "../components/parts/MainHero";
import dynamic from "next/dynamic";
import { isAfter } from "date-fns";
import { useIsActiveSubscription } from "../hooks/useIsActiveSubscription";
import { Link } from "../components/Link";
import { Contact } from "../components/parts/Contact";
import { Footer } from "../components/parts/Footer";

export default function SubmitPage() {
  const toast = useToast()

  const [isChecked, setIsChecked] = useState(false);

  const { isActiveSubscription } = useIsActiveSubscription();

  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked)
  }

  function handleContinue() {
    if (!isActiveSubscription) {
      toast({
        title: "Inscrições esgotadas",
        description: "Foram atingidas 600 inscrições.",
        isClosable: true,
        position: "top",
        status: "info"
      })
    } else if (isChecked && isAfter) {
      Router.push('/subscription')
    } else {
      toast({
        title: "Aceitar regulamento",
        description: "Você precisa aceitar o regulamento para continuar",
        isClosable: true,
        position: "top",
        status: "warning",
      })
    }
  }
  return (
    <Flex
      w="100%"
      direction="column"
    >
      <Header pageName="Regulamento | Passeio ciclístico 2022" />

      {/* principal */}
      <MainHero
        h={["md"]}
      >
        <Text
          pos="absolute"
          bottom={["20", "0"]}
          left="50%"

          fontFamily="heading"
          fontWeight="black"
          fontSize={["lg", "2xl", "4xl"]}
          textTransform="uppercase"

          bgColor="white"

          w={["xs", "md", "lg"]}
          textAlign="center"
          px={["6", "8", "8"]}
          py="6"

          boxShadow="0px 0px 10px 10px rgba(0,0,0,0.05)"

          rounded="full"
          transform="translate(-50%, 50%)"
          zIndex="2"
        >
          {isActiveSubscription ? "INSCRIÇÃO" : "REGULAMENTO"}
        </Text>
      </MainHero>
      <Section
        bgColor="black"
      >

        {isActiveSubscription ? <Flex>
          <Flex
            align="center"
            gridGap="4"
            bgColor="brand.yellow"
            rounded="full"
            w="5xl"
            px="8"

            cursor="pointer"
            transition=".5s all"
            _hover={{
              bgColor: darken(0.07, '#FCE321')
            }}
          >

            <Switch
              id="isChecked"
              size="lg"
              colorScheme="blackAlpha"
              isChecked={isChecked}
              onChange={handleChecked}

            />
            <FormLabel
              color="black"
              htmlFor="isChecked"
              fontSize={["sm", "sm", "2xl", "2xl", "3xl"]}
              textTransform="uppercase"
              fontFamily="heading"
              fontWeight="black"
              // pr="10"
              margin="0"
              cursor="pointer"

            >
              Eu li e concordo com o regulamento
            </FormLabel>
          </Flex>
          <Button
            size="lg"

            fontFamily="heading"
            fontWeight="black"
            fontSize={["md", "md", "2xl", "3xl"]}
            textTransform="uppercase"

            rounded="full"

            w="sm"
            px="8"
            py="10"
            ml="-20"

            zIndex="2"

            aria-disabled={!isChecked || !isActiveSubscription}
            autoFocus={isChecked}
            _disabled={{
              opacity: 1,
              backgroundColor: darken(0.3, '#fff')
            }}

            onClick={handleContinue}
          >
            CONTINUAR
          </Button>
        </Flex>
          :
          <Flex justify="center" w="100%" color="white">
            <Text >
              Inscrições esgotadas.
              <Link href="#contato" textDecoration="underline" ml="1">
                Precisa de suporte? Entre em contato
              </Link>
            </Text>

          </Flex>
        }

        <Flex
          // overflowY="scroll"
          direction="column"
          bgColor="white"

          fontSize="lg"

          textAlign="justify"
          px="6"
          py="6"

          borderRadius={["4", "4", "4", "4", "2xl"]}
        >
          <Text alignSelf="center" fontWeight="bold" mb="4">REGULAMENTO *retificado em 10/04/2025</Text>

          <Text mb="2">	O evento esportivo, PASSEIO CICLÍSTICO MAIO AMARELO 2025 doravante denominado PASSEIO, será realizado na cidade de Mossoró com largada e chegada na rua Juvenal Lamartine, ao lado do antigo Fórum e poderão participar pessoas de ambos os sexos, regularmente inscritos de acordo com o REGULAMENTO OFICIAL do PASSEIO.</Text>

          <Text mb="2">	O Passeio Ciclístico Maio Amarelo 2025  , idealizado pela Secretaria Municipal de Segurança Pública, Defesa Civil, Mobilidade Urbana e Trânsito (SESDEM) tem como objetivo alerta a população sobre a importância de um trânsito seguro. Além de estimular o uso de bicicletas como atividade física esportiva, na promoção da saúde e bem-estar. Possibilitando ainda uma alternativa de transporte, promovendo um ambiente mais saudável e sustentável.</Text>

          <Text mb="2">	O PASSEIO será realizado no dia 01/05/2025 com concentração às 6h e largada as 6h30min.</Text>

          <Text mb="2">	As inscrições serão realizadas somente pelo site: https://passeiomaioamarelo.mossoro.rn.gov.br/ tendo início no dia 11/04/2025 e término no dia 13/04/2025 ou até preencher números de vagas.</Text>

          <Text mb="2">	A inscrição só será validada após doação de 2kg de alimento não perecível que devem ser entregues após a divulgaçãp do local em nosso instagram. Os alimentos arrecadados serão doados para a Instituições filantrópicas. O participante deverá apresentar no ato da doação um documento original com foto.</Text>

          {/* <Text mb="2">	O participante devidamente inscrito receberá no dia da doação dos alimentos uma camiseta alusiva ao evento juntamente com um passaporte (pulseira) que dará direito a receber uma medalha personalizada de metal no final do evento.</Text> */}
          {/* <Text mb="2">	O participante devidamente inscrito receberá uma camiseta alusiva ao evento juntamente com um passaporte (pulseira) que dará direito a receber uma medalha personalizada de metal no final do evento.</Text> */}
          <Text mb="2">	A entrega dos kits será realizada no dia 29 a 30 de abril das 10h às 22h na loja da adidas, localizada no partage shopping.</Text>
          
          <Text mb="2">	Somente será válida uma inscrição por CPF, menores de 18 anos só poderão participar acompanhados por um responsável. Todos os participantes devem possuir CPF.</Text>

          <Text mb="2">	Declaro que estou em plenas condições físicas e psicológicas de participar deste PASSEIO e estou ciente que não existe nenhuma recomendação médica que me impeça de praticar atividades físicas.</Text>

          <Text mb="2">	Assumo, por minha livre e espontânea vontade, todos os riscos envolvidos e suas consequências pela participação neste PASSEIO, isentando seus organizadores, colaboradores e patrocinadores DE TODA E QUALQUER RESPONSABILIDADE por quaisquer danos materiais, morais ou físicos, que porventura venha a sofrer, advindos da participação neste PASSEIO.</Text>

          <Text mb="2">	Compreendi e estou de acordo com todos os itens deste TERMO DE RESPONSABILIDADE, isentando assim quem quer que seja, de toda e qualquer responsabilidade legal de tudo o que vier a ocorrer comigo por consequência da minha participação neste evento.</Text>

        </Flex>

        {/* <PDFViewer /> */}

      </Section>

      {/* <Contact /> */}

      <Footer />
    </Flex>

  )
}