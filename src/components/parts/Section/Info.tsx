import { Flex, Text, Divider, useBreakpointValue, Heading, Icon } from "@chakra-ui/react";
import { Section } from "../../Section";

import { MdWatchLater } from "react-icons/md";

export function InfoSection() {
  return (
    <Section
      id="info-section"

      backgroundColor="brand.black"
      position="relative"
      overflow="hidden"
      backgroundImage="/assets/camisa-maio-amarelo.png"
      backgroundRepeat="no-repeat"
      backgroundSize={["200px", "400px", "500px", "500px"]}
      backgroundPosition={["right -20px bottom -500px", "right -150px bottom 50px", "right -200px bottom 90px", "right -200px bottom 90px", "left 90% bottom 100px",]}
    >
      <Heading
        color="brand.yellow"
        fontWeight="black"
        textTransform="uppercase"
        fontSize="5xl"

        maxW="xl"
      >
        Quando será o passeio ciclístico?
      </Heading>

      <Heading
        color="white"
        fontSize="5xl"
        fontWeight="black"
        textTransform="uppercase"
      >
        19 DE MAIO<br />
        <Flex align="center" gridGap=""><Icon as={MdWatchLater} /> 06H30</Flex>
      </Heading>

      <Text
        fontSize={["xl", "xl", "2xl", "2xl"]}
        color="yellow"
        maxW="2xl"
      >
        O ponto de partida do Passeio Ciclístico<br /> Maio Amarelo 2024 será no Corredor Cultural<br /> localizado na Avenida Rio Branco, ao lado do <br/> TEATRO MUNICIPAL DIX HUIT ROSADO.
      </Text>
      {/* <Image
          src="/assets/camisa-maio-amarelo.webp"
          w="auto"
          h="xl"
          width={`${1459 * 0.8}`}
          height={`${891 * 0.8}`}
          position="absolute"
          left="0"
          bottom="0"
        /> */}
    </Section>
  )
}