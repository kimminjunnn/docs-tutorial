import { Editor } from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  // 구조 분해 할당으로 await를 적용한 모습, 다음 두 줄과 동일하게 동작한다.
  // const awaitedParams = await params;
  // const documentId = awaitedParams.documentId;

  return (
    <div>
      <p> Document Id : {documentId}</p>
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
