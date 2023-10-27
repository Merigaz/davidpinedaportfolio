import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

export function LinksHeader() {
  return (
    <div className="flex gap-1 justify-start">
        <a href="https://github.com/Merigaz" target="_blank" className="self-center">
        <GithubOutlined className="text-2xl"  />
        </a>
        <a href="https://www.linkedin.com/in/davidpineda0629/" target="_blank" className="self-center">
        <LinkedinOutlined className="text-2xl"  />
        </a>
      
    </div>
  );
}
