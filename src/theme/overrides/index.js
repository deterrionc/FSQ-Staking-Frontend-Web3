import { merge } from "lodash";
import Card from "./Card";
import Timeline from "./Timeline";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(Card(theme), Timeline(theme));
}
