export const images: Record<string, string> = Object.fromEntries(
  Object.entries(
    import.meta.glob(
      "../assets/project_images/typesetting/*.{png,jpg,jpeg,webp}",
      { eager: true, import: "default" }
    )
  ).map(([path, src]) => [path.split("/").pop()!.split(".")[0], src as string])
);
