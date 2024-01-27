import {
  Flex,
  Heading,
  Box,
  Container,
  Button,
  Text,
  Strong,
  Quote,
  Table,
  Link,
  Code,
  IconButton,
} from "@radix-ui/themes";
import {
  GitHubLogoIcon,
  KeyboardIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";

export default async function IndexPage() {
  return (
    <Container size="2">
      <Flex direction={"row"} justify={"between"} align={"center"} py="4">
        <Heading as="h1" highContrast color="sky">
          Mock JSON API
        </Heading>
        <Flex gap="4">
          <IconButton radius="full" variant="surface" aria-label="github">
            <GitHubLogoIcon width="24" height="24" />
          </IconButton>
        </Flex>
      </Flex>
      <Box
        style={{
          paddingTop: "160px",
          paddingBottom: "160px",
        }}
      >
        <Flex direction={"column"} align={"center"} gap="4">
          <KeyboardIcon width="80" height="80" />
          <Text size="8">
            <Strong>Mock JSON API</Strong>
          </Text>
          <Quote style={{ textAlign: "center" }}>
            Simple, free mock REST API service for developer. It&apos;s awesome
            for sample codes, test things purposes
          </Quote>
          <Flex direction={"row"} align={"center"} gap="2">
            <Link href="https://opensource.guide/starting-a-project/">
              <Button radius="full" variant="surface" aria-label="github">
                <GitHubLogoIcon width="16" height="16" />
                View on Github
              </Button>
            </Link>
            <Button radius="full" variant="soft" aria-label="guide">
              <EyeOpenIcon width="16" height="16" />
              Read the guide
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Flex direction={"column"} py="6" gap={"4"}>
        <Text size="6">
          <Strong>Why? </Strong>
        </Text>
        <Box>
          <Text>
            Inspired by Typicode&apos;s JSONPlaceholder, so I decided to build a
            simple service by using Next.js, Prisma, PostgreSQL and RadixUI.
          </Text>
        </Box>
      </Flex>
      <Flex direction={"column"} py="6" gap={"4"}>
        <Text size="6">
          <Strong>Resources</Strong>
        </Text>
        <Text>
          Mock JSON API support 6 resources: <Code variant="soft">User</Code>,{" "}
          <Code variant="soft">Todo</Code>, <Code variant="soft">Category</Code>
          , <Code variant="soft">Product</Code>,{" "}
          <Code variant="soft">Post</Code>, <Code variant="soft">Comment</Code>
        </Text>
        <Box py="2">
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Resource</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Note</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Link href="/api/users" target="_blank">
                    /users
                  </Link>
                </Table.RowHeaderCell>
                <Table.Cell>20 user</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <Link href="/api/todos" target="_blank">
                    /todos
                  </Link>
                </Table.RowHeaderCell>
                <Table.Cell>200 todo</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Link href="/api/categories" target="_blank">
                    /categories
                  </Link>
                </Table.RowHeaderCell>
                <Table.Cell>20 category</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Link href="/api/products" target="_blank">
                    /products
                  </Link>
                </Table.RowHeaderCell>
                <Table.Cell>100 product per category</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Link href="/api/posts" target="_blank">
                    /posts
                  </Link>
                </Table.RowHeaderCell>
                <Table.Cell>100 post</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Link href="/api/comments" target="_blank">
                    /comments
                  </Link>
                </Table.RowHeaderCell>
                <Table.Cell>20 comment per post</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>
        <Text>
          <Strong>Note:</Strong> see guide for usage examples.
        </Text>
      </Flex>
      <Flex direction={"column"} py="6" gap={"4"}>
        <Text size="6">
          <Strong>Routes</Strong>
        </Text>
        <Text>All HTTP methods are supported.</Text>
        <Box py="2">
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>HTTP methods</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Path</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>GET</Table.RowHeaderCell>
                <Table.Cell>/api/users</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>POST</Table.RowHeaderCell>
                <Table.Cell>/api/users</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>GET</Table.RowHeaderCell>
                <Table.Cell>/api/users/1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>PUT</Table.RowHeaderCell>
                <Table.Cell>/api/users/1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>PATCH</Table.RowHeaderCell>
                <Table.Cell>/api/users/1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>DELETE</Table.RowHeaderCell>
                <Table.Cell>/api/users/1</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>
        <Text>
          <Strong>Note:</Strong> see guide for usage examples.
        </Text>
      </Flex>

      <Flex direction={"row"} justify={"between"} py="6">
        <Text>@ {new Date().getFullYear()} Build and maintained with ❤️</Text>
      </Flex>
    </Container>
  );
}
