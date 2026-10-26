import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { Alert } from "../components/ui/Alert";

export function Ex08AlertNotification() {
  return (
    <ExerciseWrapper
      number="08"
      title="Alert / Notification"
      subtitle="Semantic variants + icon/title/message/actions"
    >
      <div className="flex flex-col items-start gap-4 rounded-3xl bg-slate-100 p-8 w-full max-w-md">
        <Alert variant="success" title="Success">
          Your changes were saved.
        </Alert>

        <Alert variant="warning" title="Warning">
          Review the required fields.
        </Alert>

        <Alert variant="error" title="Error">
          Something went wrong.
        </Alert>
      </div>
    </ExerciseWrapper>
  );
}

export default Ex08AlertNotification;