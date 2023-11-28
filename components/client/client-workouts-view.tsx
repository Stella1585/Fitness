import { useEffect, useState } from "react";
export default function ClientWorkoutsView() {
  const [workouts, setWorkouts]: any = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/external/client/workout/multiple/get");
      const json = await res.json();

      if (res.ok) {
        setWorkouts(json);
      }
    })();
  }, []);

  if (!workouts) return <div>Loading ...</div>;

  return (
    <div>
      {workouts.map((workout: any) => (
        <div key={workout?.workoutProgramId}>
          <div>{workout?.name}</div>
        </div>
      ))}
    </div>
  );
}
