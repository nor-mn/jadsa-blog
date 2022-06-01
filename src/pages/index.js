import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

import {
  Grid,
  Card,
  CardActions,
  Button,
  Typography,
  CardContent,
} from "@mui/material";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `posts/${fileName}/${fileName}.md`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
      <Grid container direction="row"
      justifyContent="center"
      alignItems="flex-start" item spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {posts.map(({ slug, frontmatter }) => (
          <Grid key={slug} item xs={2} sm={4} md={4}>
            <Card>
              <Image
                width="100%"
                height={40}
                layout="responsive"
                alt={frontmatter.blogTitle}
                src={`/${frontmatter.blogImage}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {frontmatter.blogTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {frontmatter.blogDescription}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/post/${slug}`}>
                    <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
}
