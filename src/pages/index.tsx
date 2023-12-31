import { GetDataSourceImplement } from "@/core/data/dataSoureses/getDataSource";
import GetTaskRepositoryImplement from "@/core/data/repositories/getTaskRepositoriesImplement";
import { Task } from "@/core/domain/entities/task";
import { GetTasks } from "@/core/domain/usecases/getTasks";
import List from "@/core/presentation/components/list";
import { GetStaticProps } from "next";

export const getStaticProps = (async (context) => {
  try {
    const getData = new GetTasks(new GetTaskRepositoryImplement(new GetDataSourceImplement));
    const result = await getData.Execute();
    return { props: { myTasks:result,error : false } }
  } catch (error) {
    return { props: { myTasks:[],error : true } }
  }
}) satisfies GetStaticProps<{
  myTasks: Task[],
  error :boolean
}>

export default function Home({myTasks,error}:{myTasks:Task[],error:boolean}) {
  return (
    <main className="w-full h-dvh lg:container px-4 flex flex-col items-center">
      {
        error === true? 
        <div>somthing went wrong</div>:
        <List tasks={myTasks}/>
      }
    </main>
  );
}
