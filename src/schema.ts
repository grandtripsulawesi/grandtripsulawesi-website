import z from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama harus minimal 2 karakter')
    .max(50, 'Nama maksimal 50 karakter'),
  address: z.string().min(10, 'Alamat harus minimal 10 karakter'),
  datePicker: z.object(
    {
      from: z.date(),
      to: z.date().optional(),
    },
    { error: 'Tanggal keberangkatan harus diisi' }
  ),
  destination: z.enum(['dalam kota', 'luar kota'], {
    error: 'Tujuan harus diisi',
  }),
  armada: z.enum(['lepas kunci', 'all in']),
});
