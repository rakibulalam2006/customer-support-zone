import { use, useState } from "react";
import Container from "./compunents/Container";
import Card from "./compunents/Card";
import Banner from "./compunents/Banner";
import History from "./compunents/History";

const IssuesManagement = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  const [history, setHistory] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([])

  return (
    <div>
      <Banner data={data} />
      <Container>
        <div className="lg:flex gap-4 mt-4">
          <div>
            <h2 className="text-2xl font-bold text-[#34485A]">
              Customer Tickets
            </h2>
            <div className=" max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-4">
              {data
              .filter(item =>item.status !== "Resolved")
              .map((item) => {
                console.log(item);
                return (
                  <div>
                    <Card
                      key={item.id}
                      issue={item}
                      data={data}
                      setData={setData}
                      setHistory={setHistory}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <History history={history} 
          data={data}
          setData={setData}
          resolvedTask={resolvedTask}
          setResolvedTask={setResolvedTask} />
        </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;
