import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    IconButton,
    Stack,
    TextField,
    Typography,
    Divider,
    Paper,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Carousel({ images = [], interval = 5000 }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!images.length) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
        return () => clearInterval(id);
    }, [images.length, interval]);

    const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const goNext = () => setIndex((i) => (i + 1) % images.length);

    return (
        <Box sx={{ position: "relative", borderRadius: 4, overflow: "hidden" }}>
            <Box
                sx={{
                    display: "flex",
                    width: `${images.length * 100}%`,
                    transform: `translateX(-${index * (100 / images.length)}%)`,
                    transition: "transform .6s ease",
                }}
            >
                {images.map((img, i) => (
                    <Box
                        key={i}
                        component="img"
                        src={img.src}
                        alt={img.alt}
                        sx={{ width: `${100 / images.length}%`, aspectRatio: "16/9", objectFit: "cover" }}
                        loading={i === 0 ? "eager" : "lazy"}
                    />
                ))}
            </Box>

            <IconButton
                aria-label="Anterior"
                onClick={goPrev}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 8,
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,.8)",
                    "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
                aria-label="Siguiente"
                onClick={goNext}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 8,
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,.8)",
                    "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>

            <Stack direction="row" spacing={1} sx={{ position: "absolute", bottom: 10, width: "100%", justifyContent: "center" }}>
                {images.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => setIndex(i)}
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            bgcolor: i === index ? "primary.main" : "common.white",
                            boxShadow: 1,
                            cursor: "pointer",
                            opacity: 0.9,
                            border: "1px solid rgba(0,0,0,.12)",
                        }}
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default function Home() {
    const images = [1, 2, 3, 4, 5, 6].map((n) => ({
        src: `/images/receta${n}.jpg`,
        alt: `Receta ${n}`,
    }));

    const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
    const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    const onSubmit = (e) => {
        e.preventDefault();
        const to = "contacto@tusitio.com"; 
        const subject = encodeURIComponent(`Contacto — ${form.nombre}`);
        const body = encodeURIComponent(`Nombre: ${form.nombre}\nEmail: ${form.email}\n\nMensaje:\n${form.mensaje}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    };

    return (
        <Box>
            <Box
                sx={{
                    background: "linear-gradient(180deg, #fff 0%, #f9fafb 100%)",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Stack spacing={2}>
                                <Typography variant="overline" color="primary" sx={{ letterSpacing: 1.2 }}>
                                    Libro de cocina · React
                                </Typography>
                                <Typography variant="h3" fontWeight={800} lineHeight={1.2}>
                                    Recetas sencillas, sabor extraordinario
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Una mini plataforma de recetas construida con React + Vite, siguiendo guías de Material Design. Minimalista, accesible y pensada para CI/CD con Netlify.
                                </Typography>
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                    <Button variant="contained" size="large" href="#galeria" startIcon={<RestaurantMenuIcon />}>Ver galería</Button>
                                    <Button variant="outlined" size="large" href="#contacto">Contacto</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Paper elevation={3} sx={{ p: 1.5, borderRadius: 4 }}>
                                <Carousel images={images} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container id="galeria" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Stack spacing={2} sx={{ mb: 3 }}>
                    <Typography variant="h4" fontWeight={700}>Galería</Typography>
                    <Typography color="text.secondary">Un vistazo a nuestras recetas destacadas</Typography>
                </Stack>
                <Card sx={{ borderRadius: 4 }}>
                    <CardContent>
                        <Carousel images={images} interval={4500} />
                    </CardContent>
                </Card>
            </Container>

            <Box sx={{ backgroundColor: "#fcfcfd", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "divider" }}>
                <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Sobre la plataforma</Typography>
                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                Nuestro sitio demuestra un flujo moderno de desarrollo web: componentes reutilizables, diseño limpio y despliegue continuo. La navegación es simple y cada receta presenta ingredientes y pasos claros.
                            </Typography>
                            <Typography color="text.secondary">
                                Está construido con React + Vite y estilos de Material Design, priorizando accesibilidad, tipografía legible y contrastes adecuados.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                {["Diseño minimalista", "Código reutilizable", "Despliegue continuo"].map((title, i) => (
                                    <Grid key={i} item xs={12}>
                                        <Card variant="outlined" sx={{ borderRadius: 3 }}>
                                            <CardContent>
                                                <Typography fontWeight={600}>{title}</Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {i === 0 && "Interfaz limpia con jerarquía visual y espaciado generoso."}
                                                    {i === 1 && "Componentes como Recipe permiten mantener consistencia y rapidez."}
                                                    {i === 2 && "Integración con Netlify para publicar cambios desde la rama principal."}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container id="contacto" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Contacto</Typography>
                        <Typography color="text.secondary" sx={{ mb: 3 }}>
                            ¿Tienes dudas o comentarios? Escríbenos y te responderemos pronto.
                        </Typography>

                        <Stack component="form" spacing={2} onSubmit={onSubmit}>
                            <TextField label="Nombre" name="nombre" value={form.nombre} onChange={onChange} required fullWidth />
                            <TextField label="Email" name="email" type="email" value={form.email} onChange={onChange} required fullWidth />
                            <TextField label="Mensaje" name="mensaje" value={form.mensaje} onChange={onChange} required fullWidth multiline minRows={4} />
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
                                <Button type="submit" variant="contained" size="large">Enviar</Button>
                                <Typography variant="body2" color="text.secondary">o escribe a <Box component="span" sx={{ fontWeight: 600 }}>contacto@tusitio.com</Box></Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ borderRadius: 3, height: "100%" }}>
                            <CardContent>
                                <Typography fontWeight={700} sx={{ mb: 2 }}>Información</Typography>
                                <Stack spacing={1.5}>
                                    <Stack direction="row" spacing={1.5} alignItems="center">
                                        <EmailIcon fontSize="small" />
                                        <Typography variant="body2">contacto@tusitio.com</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1.5} alignItems="center">
                                        <LocalPhoneIcon fontSize="small" />
                                        <Typography variant="body2">+57 300 000 0000</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1.5} alignItems="center">
                                        <LocationOnIcon fontSize="small" />
                                        <Typography variant="body2">Medellín, Colombia</Typography>
                                    </Stack>
                                </Stack>
                                <Divider sx={{ my: 2 }} />
                                <Typography variant="body2" color="text.secondary">
                                    Horario de atención: Lunes a Viernes, 9:00–17:00.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
