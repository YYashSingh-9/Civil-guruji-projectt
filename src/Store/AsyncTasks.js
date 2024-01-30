export const dataSendRequest = async (
  type,
  additional,
  methodtype,
  data_to_send,
  cookie
) => {
  let url = `http://127.0.0.1:3000/api/v1/${type}`;
  //   let url = `https://ehbackend.onrender.com/api/v3/${type}`;
  additional ? (url += `/${additional}`) : "";
  let sending_data = data_to_send ? JSON.stringify(data_to_send) : "";
  const doc = await fetch(url, {
    credentials: "include",
    withCredentials: true,
    method: methodtype,
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      cookie: `jwt=${cookie}`,
    },
    body: sending_data,
    redirect: "follow",
  });
  const doc2 = await doc.json();
  console.log("this is fetch", doc2);
  return doc2;
};

// FETCH TEMPLATE FUNCTION _____
export const fetchFunction = async (type, cookie, additional) => {
  let url = `http://127.0.0.1:3000/api/v1/${type}`;
  //   let url = `https://ehbackend.onrender.com/api/v3/${type}`;

  additional ? (url += `/${additional}`) : "";
  if (!cookie) {
    const doc = await fetch(url);
    const doc2 = await doc.json();
    return doc2;
  }
  if (cookie) {
    const doc = await fetch(url, {
      credentials: "include",
      withCredentials: true,
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        cookie: `jwt=${cookie}`,
      },
      redirect: "follow",
    });
    const doc2 = await doc.json();
    console.log(doc2);
    return doc2;
  }
};

export const login_Signup_Request = async ({ request }) => {
  const doc = await request.formData();
  const doc2 = Object.fromEntries(doc);
  const intent = doc.get("intent");

  let dataToSend;
  if (intent === "login") {
    dataToSend = {
      email: doc2.email,
      password: doc2.password,
    };
    const returned_val = await dataSendRequest(
      "user",
      "login",
      "POST",
      dataToSend
    );
    return returned_val;
  }
  if (intent === "signup") {
    console.log("this ran", intent, doc2);

    const data = await dataSendRequest("user", "signup", "POST", doc2);
    console.log(data);
    return data;
  }
};

export const getAllCourses = async () => {
  const doc = await fetchFunction("course", "", "");
  console.log(doc);
  return doc;
};

export const visitorPost = async ({ request }) => {
  const doc = await request.formData();
  console.log(doc);
  const intent = doc.get("intent");
  const str = intent.split(" N ");
  console.log(str);
  const body = {
    userId: str[0],
    courseId: str[1],
  };
  console.log(body);
  const data = await dataSendRequest("cart", "buy", "POST", body, "");
  console.log(data);
  return data;
};

export const getAllCartItems = async () => {
  const doc = await fetchFunction("cart", "", "");
  console.log(doc);
  return doc;
};
