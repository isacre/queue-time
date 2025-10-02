import ModalButton from "@/components/modal";
import Navbar from "@/components/navbar";
import useQueues from "@/hooks/useQueues";
import { useNavigate } from "react-router-dom";
import CreateQueueModal from "./modals/createQueue";

export default function QueuesPage() {
  const navigate = useNavigate();
  const { queues, fetchQueues } = useQueues();
  return (
    <div>
      <Navbar
        navigationLinks={[]}
        logo={<div>Queue Time</div>}
        actionButton={
          <ModalButton
            triggerText="Create Queue"
            title="Create Queue"
            description="Create a new queue"
            children={<CreateQueueModal fetchQueues={fetchQueues} />}
          />
        }
        logoutFn={() => {}}
      />
      <div className="p-2 flex flex-col gap-2">
        {queues.map((queue) => (
          <div
            className="cursor-pointer p-2 border border-gray-300 rounded-md bg-[#e5e5e5] text-black"
            key={queue?.id}
            onClick={() => {
              navigate(`/queue/${queue?.id}`);
            }}
          >
            {queue?.name}
          </div>
        ))}
      </div>
    </div>
  );
}
