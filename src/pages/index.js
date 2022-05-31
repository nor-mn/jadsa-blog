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
    <Grid container spacing={2}>
      <Grid container spacing={2} item xs={9}>
        {posts.map(({ slug, frontmatter }) => (
          <Grid key={slug} item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Image
                width={345}
                height={200}
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
      <Grid item xs={3}></Grid>
    </Grid>
  );
}
