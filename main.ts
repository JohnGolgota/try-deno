import axiod from "https://deno.land/x/axiod/mod.ts";
import "jsr:@std/dotenv/load";
import entityList from "./entityList.ts";

var error = [];
var success = [];
var responses = [];

entityList.forEach(async (entity) => {
  const options = {
    method: "GET",
    url: `http://localhost:4000/${entity.entityName}/getAll`,
    headers: {
      Authorization: `Bearer ${Deno.env.get("JWT_TOKEN")}`,
    },
  };
  try {
    const response = await axiod(options);
    responses.push(response);
    if (response.status === 200) {
      console.log("success");
      success.push(entity.entityName);
    } else {
      console.log(response);
      error.push(entity.entityName);
    }
  } catch (e) {
    console.log(e);
    error.push(entity.entityName);
  }
});
