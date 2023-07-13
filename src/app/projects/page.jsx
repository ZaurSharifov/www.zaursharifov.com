"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.GRAPHQL_CMS_API}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          projects {
            description
            github
            id
            live
            name
            url
            detail {
              html
            }
            photo {
              url
            }
            tags {
              id
              name
            }
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.projects));
  }, []);

  return (
    <main className={styles.projects}>
      {data.map((item) => (
        <Link key={item.id} href={`/projects/${item.url}`} className={styles.item}>
          <div className={styles.imgcontainer}>
            <Image src={item.photo.url} alt={item.name} className={styles.img} loading="lazy" width={350} height={250} unoptimized />
          </div>
          <div className={styles.about}>
            <h3>{item.name}</h3>
            <p className={styles.text}>{item.description}</p>
            <div className={styles.tags}>
              {item.tags.map((i) => (
                <span key={i.id}>{i.name}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}
