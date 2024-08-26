import pkg from '@material-tailwind/react';
const { Input } = pkg;
export function InputDefault() {
  return (
    <div className="flex w-72 flex-col gap-6">
      <Input variant="static" label="Static" placeholder="Static" />
      <Input variant="standard" label="Standard" />
      <Input variant="outlined" label="Outlined" />
    </div>
  );
}