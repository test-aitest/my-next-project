" use Server";

function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export async function createContactData(_prevState: any, formData: FormData) {
  const rawFormData = {
    lastname: formData.get("lastname") as string,
    firstname: formData.get("firstname") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  if (!rawFormData.lastname) {
    return {
      status: "error",
      message: "姓が入力されていません",
    };
  }
  if (!rawFormData.firstname) {
    return {
      status: "error",
      message: "名が入力されていません",
    };
  }
  if (!rawFormData.company) {
    return {
      status: "error",
      message: "会社名が入力されていません",
    };
  }
  if (!rawFormData.email) {
    return {
      status: "error",
      message: "メールアドレスが入力されていません",
    };
  }
  if (!validateEmail(rawFormData.email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が誤っています",
    };
  }
  if (!rawFormData.message) {
    return {
      status: "error",
      message: "メッセージが入力されていません",
    };
  }

  return { status: "success", message: "OK" };
}
