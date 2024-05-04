import { Flex, Text, Divider, useBreakpointValue } from "@chakra-ui/react";
import { Section } from "../../Section";
import { Image } from "../../Image"
import { Link } from "../../Link";

export function DonationSection() {
  return (
    <Section
      id="doacao-section"

      color="black"
      backgroundColor="brand.yellow"
    >
      <Flex
        align="center"
        direction={["column", "column", "row", "row"]}
        justify="space-around"
        h="100%"
        gridGap={["4", "4", "4", "10"]}
      >
        <Flex
          align="center"
          justify="center"
          direction={["column", "column", "column", "column", "row", "row"]}
          w={["lg", "lg", "xl", "4xl"]}
        >
          <Image
            src="/assets/icons/doacao-icone.webp"
            alt="Figura monocromática em preto de duas mãos e uma cesta de alimentos representando a doação de alimentos."
            w="36"
            width="400"
            height="400"
            objectFit="contain"
            placeholder="blur"
          />
          <Flex
            direction="column"
            // fontSize={["4xl", "4xl", "4xl", "4xl", "5xl"]}
            fontSize={["1xl", "1xl", "1xl", "3xl", "3xl"]}
            fontWeight="bold"
            textTransform="uppercase"
            fontFamily="heading"
            justify="center"
            align={["center", "center", "center", "center", "flex-start"]}
          >
            {/* <Text fontSize={["4xl", "4xl", "4xl", "5xl", "7xl"]} mb={["-6", "-6", "-6", "-8", "-10"]}>2KG</Text> */}
            <Text>PONTO DE APOIO</Text>
            <Text>HIDRATAÇÃO + BRINDES</Text>
          </Flex>
        </Flex>

        {/* <Text
          fontSize={["6xl", "6xl", "6xl", "6xl", "9xl"]}
          fontWeight="extrabold"
          textTransform="uppercase"
          fontFamily="heading"
        >
          =
        </Text> */}

        <Flex
          align={["center", "center", "flex-start", "flex-start"]}
          justify="center"
          direction="column"
          gridGap="4"
        >
          <Flex className="medalha"
            align="center"
            justify="center"
            gridGap="8"
            flexDirection={["column", "column", "column", "row"]}
          >
            {/* <Image
              src="/assets/icons/medalha-icone.webp"
              alt="Figura monocromática em preto de uma medalha com uma estrela desenhada no centro."
              w="36"
              width="400"
              height="400"
              placeholder="blur"
            /> */}
            {/* <Text
              fontSize={["2xl", "2xl", "2xl", "4xl"]}
              w={["xs", "auto", "md", "md", "md"]}
              textAlign={["center", "center", "center", "left"]}
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
              lineHeight="36px"
            >
              medalha personalizada
            </Text> */}
          </Flex>

          <Flex className="camiseta"
            align="center"
            justify="center"
            gridGap="8"
            flexDirection={["column", "column", "column", "row"]}
          >
            <Image
              src="/assets/icons/camisa-icone.webp"
              alt="Figura monocromática em preto do contorno de uma camisa."
              w="36"
              width="242"
              height="243"
              placeholder="blur"
            />
            <Text
              fontSize={["2xl", "2xl", "2xl", "3xl"]}
              w={["xs", "auto", "md", "md", "md"]}
              textAlign={["center", "center", "center", "left"]}
              fontWeight="bold"
              textTransform="uppercase"
              fontFamily="heading"
              lineHeight="36px"
            >
              material visual: <br />
              camisetas.
            </Text>
          </Flex>
        </Flex>

      </Flex>
      <Text alignSelf="center" fontSize={["18px"]} textAlign="center" fontFamily="heading">
      O movimento Maio Amarelo nasce com a ideia de chamar a atenção da sociedade para o alto indice de mortes e feridas do trânisto em todo o mundo.
      </Text>
    </Section >
  )
}